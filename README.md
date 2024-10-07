# **myAlertDialog**

### **Overview:**

The current iteration of the **myAlertDialog** project focuses on building a simple, yet functional web application using React. It consists of two main components:
- A button on the main page (`MainComponent`) that navigates to a form.
- A form page (`FormPage`) where users can submit their input.

### **Key Changes:**
- **Removed `RandomColorPage`:** The RandomColorPage, which previously displayed a random background color, has been removed for now.
- **MainComponent:** The app starts with a button that leads users to the form page.
- **FormPage:** Users can fill out and submit a form. The submission button currently gives users the experience that their form has been submitted.

### **Current Features:**
1. **MainComponent:**
   - A simple button that, when clicked, navigates to the form page.

2. **FormPage:**
   - A form where users can input data.
   - A submit button that allows users to submit their input, simulating a submission experience.

### **Technologies Used:**
- **React**: For building the user interface.
- **React Router (`react-router-dom`)**: For routing between different pages (MainComponent and FormPage).
- **Material-UI (`@mui/material`)**: For modern, responsive UI components (button, form inputs).

- **React**: For building the user interface and managing state.
- **Material-UI (MUI)**: For modern and responsive dialog design.
- **JavaScript (ES6+)**: Core logic implem

### **Installation & Setup:**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/myAlertDialog.git

   ```
2. Install the dependencies: (... into => web/js/alertdialogics)
   ```bash
   npm install
   ```
3. Run the app:
   ```bash
   npm start
   ```

### **Future Development:**
- **Dynamic Content:** Implementing functionality to dynamically change the dialog's title and message based on user input or application state.
- **Additional Button Customization:** Allowing more flexible options beyond "Yes" and "No" (e.g., "Cancel," "Retry").
- **Backend Integration:** Expanding the component's functionality by integrating it with backend services for more complex decision-making workflows.

### **Contributions:**
We welcome contributions to improve the myAlertDialog project! Feel free to open issues or submit pull requests for enhancements, bug fixes, or new features.

---

### **License:**
This project is licensed under the MIT License.


