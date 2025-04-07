# Breach-checker
Data Breach Checker

Data Breach Checker is a modern, user-friendly web application that allows anyone to check whether their personal information—like email addresses, usernames, phone numbers, or domains—has been compromised in any known data breaches.

This project uses the powerful DeHashed API to fetch breach data securely through a Node.js backend, ensuring that sensitive user queries are never exposed directly to third parties.

⸻

Key Features
	•	Secure Backend Integration
The application uses a Node.js + Express backend to securely proxy requests to the DeHashed API, keeping user data safe and protected.
	•	Modern, Responsive UI
The frontend is designed to be fully responsive and visually appealing, with a dark-only neon theme and glassy, soft UI elements.
	•	Real-Time Breach Detection
Users receive real-time feedback on whether their information appears in a data breach, complete with breach details like date, source, and type.
	•	Animated and Interactive Design
Smooth transitions, loading spinners, and subtle animations make the experience more engaging.
	•	Data Visualization
Breach types and severity levels are visualized with interactive charts to help users better understand their data exposure.
	•	Export Options
Users can easily export their breach results in PDF or CSV format for record-keeping or further analysis.
	•	Sound Feedback
Optional sound effects provide audio cues for key actions and results.

⸻

How It Works
	1.	A user enters a piece of information (like an email).
	2.	The frontend sends the request to the backend server.
	3.	The backend securely queries the DeHashed API.
	4.	The results are processed and sent back to the frontend.
	5.	The frontend displays the results with enhanced UI/UX features.

⸻

Technologies Used
	•	Frontend: HTML, CSS, JavaScript
	•	Backend: Node.js, Express
	•	API: DeHashed
	•	Other Tools: Chart.js, jsPDF, FileSaver.js, custom animations and effects

⸻

Why Use This App?

With data breaches becoming more frequent and dangerous, it’s important to stay informed about your personal information’s exposure. This app offers a secure, privacy-friendly, and elegant way to check your breach status without any technical knowledge required.

⸻

Disclaimer

This tool is for educational and ethical use only. Always ensure you have permission to check any email or account that is not your own. Misuse of the application may violate terms of service or legal regulations.
