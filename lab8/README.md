# Online Shop API (Lab 9)

This is the backend for an Online Shop project, upgraded from Lab 8 using **Django REST Framework (DRF)**. It provides a robust RESTful API for managing products and categories.

## 🚀 Key Features
- **Full CRUD Support**: Create, Read, Update, and Delete operations for both Products and Categories.
- **DRF ViewSets & Routers**: Implemented using `ModelViewSet` and `DefaultRouter` for clean and automated URL routing.
- **Serializers**: Data translation between Python models and JSON format using `ModelSerializer`.
- **Custom Actions**: Specific endpoint to retrieve all products belonging to a particular category.

## 🛠 Tech Stack
- **Python 3.14**
- **Django**
- **Django REST Framework (DRF)**
- **SQLite** (Database)

## 📂 API Endpoints
All API routes are prefixed with `/api/`.

### Categories
- `GET /api/categories/` — List all categories.
- `GET /api/categories/<id>/` — Retrieve a specific category.
- `GET /api/categories/<id>/products/` — **(Custom)** List all products in this category.
- `POST /api/categories/` — Create a new category.
- `PUT /api/categories/<id>/` — Update an existing category.
- `DELETE /api/categories/<id>/` — Delete a category.

### Products
- `GET /api/products/` — List all products.
- `GET /api/products/<id>/` — Retrieve a specific product.
- `POST /api/products/` — Create a new product.
- `PUT /api/products/<id>/` — Update an existing product.
- `DELETE /api/products/<id>/` — Delete a product.

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <your-repository-link>
   cd shop-back
