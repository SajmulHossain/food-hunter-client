# **Food Donation & Management Platform**

This project is a web application that allows users to donate, manage, and request food items. It incorporates features like authentication, private routes, JWT-based security, and dynamic functionalities for managing food-related activities.

---

## **Features**

### **1. Authentication**
- **Login** with email/password or Google/GitHub.
- **Register** with email, password, name, and profile photo.
- Password validation:
  - At least one uppercase and one lowercase letter.
  - Minimum 6 characters.
- Dynamic Navbar:
  - **Logged In**: Shows profile picture and logout button.
  - **Not Logged In**: Shows login and signup buttons.
- Uses **JWT** for session management and private route protection.

---

### **2. Food Management**
- **Home Page**:
  - Banner/Slider for a dynamic visual introduction.
  - Featured Foods section showcasing the top 6 food items.
  - Additional attractive sections for enhanced user engagement.
- **Add Food**:
  - Private route for logged-in users.
  - Form fields: Food Name, Image, Quantity, Pickup Location, Expire Date/Time, Notes, and user details.
  - Status defaults to **"available"**.
- **Available Foods**:
  - Displays all available food items.
  - Sorting by **Expiration Date**.
  - Searching by **Food Name**.
  - **View Details** button redirects to the single food details page.
- **Single Food Details**:
  - Shows all details of the selected food item.
  - Request modal for food requests.
  - Requested food is removed from available items and added to **My Food Requests**.
- **Manage My Foods**:
  - Private route for logged-in users.
  - Displays foods added by the user in a table with **Update** and **Delete** options.
  - **Update** allows editing of food details.
  - **Delete** prompts for confirmation before removal.
- **My Food Requests**:
  - Displays all food requests made by the user in a tabular format.

---

### **3. Advanced Functionalities**
- **JWT Security**:
  - Token-based authentication for private routes and secure data fetching.
- **TanStack Query**:
  - Used for fetching API data and implementing mutations.
- **Dynamic Layout**:
  - Toggle between 2-column and 3-column layouts on the **Available Foods** page.
- **Sorting and Searching**:
  - Foods can be sorted by expiration date and searched by name.

---

## **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/food-donation-platform.git
   cd food-donation-platform
