class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
end

# For your assignment you will be creating a department store with multiple departments, and each department has items for sale.

 

# BASIC OBJECTIVES:

# 1. Create a department model and an item model. (A department "has many" items for sale). DONE

# 2. Using nested routes allow departments to have items.

# 3. Create controllers for your two models that account for all CRUD actions.

# 4. Create views for your models.

 

# BONUS OBJECTIVES:

 

# 1. Add a comment model. (An item "has many" comments). Rework your routes accordingly.

# 2. Create a comment controller. Display comments when viewing an item.

# 3. Add custom styles in your *.scss file