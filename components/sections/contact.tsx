"use client";

import { useSectionInView } from "@/hooks/useSectionInView";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import SectionHeading from "../section-header";

type FormData = {
	senderEmail: string;
	message: string;
};

const Contact = () => {
	const { ref } = useSectionInView("Contact", 0);
	const [formData, setFormData] = useState<FormData>({
		senderEmail: "",
		message: "",
	});

	const [isLoading, setIsLoading] = useState<boolean>(false);

	const notify = (message: string) => toast(message);

	const handleSubmit = async (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		setIsLoading(true);
		const res = await fetch("/api/send-email", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(formData),
		});
		const data = await res.json();
		setIsLoading(false);

		if (data) {
			notify(data.message || data.error);
			setFormData({
				senderEmail: "",
				message: "",
			});
		}
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((curr) => ({ ...curr, [name]: value }));
	};

	return (
		<motion.section
			id="contact"
			ref={ref}
			className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center scroll-mt-28"
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			transition={{
				duration: 1,
			}}
			viewport={{
				once: true,
			}}
		>
			<SectionHeading>Contact me</SectionHeading>

			<p className="text-gray-700 -mt-6 dark:text-white/80">
				Please contact me directly through this form.
			</p>

			<form className="mt-10 flex flex-col dark:text-black">
				<input
					className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
					name="senderEmail"
					type="email"
					required
					maxLength={500}
					placeholder="Your email"
					value={formData.senderEmail}
					onChange={handleChange}
				/>
				<textarea
					className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
					name="message"
					placeholder="Your message"
					required
					maxLength={5000}
					value={formData.message}
					onChange={handleChange}
				/>
				<button
					onClick={handleSubmit}
					type="button"
					disabled={isLoading}
					className="py-3 font-semibold px-6 disabled:cursor-not-allowed disabled:opacity-60 disabled:dark:hover:bg-white/10 disabled:hover:bg-gray-900 rounded-xl w-full bg-gray-900 text-white outline-none transition-all hover:bg-gray-700 dark:bg-white/10 dark:hover:bg-white/20 disabled:bg-opacity-65"
				>
					{isLoading ? "Submitting..." : "Submit"}
				</button>
			</form>
		</motion.section>
	);
};

export default Contact;
