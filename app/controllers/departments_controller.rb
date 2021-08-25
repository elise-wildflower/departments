class DepartmentsController < ApplicationController

  def index
    departments = Department.all
    render component: "Departments", props: { departments: departments }
  end

  def show
  end

  def new
    render component: "DepartmentNew"
  end

  def edit
  end
end
