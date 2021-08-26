class DepartmentsController < ApplicationController

  def index
    departments = Department.all
    render component: "Departments", props: { departments: departments }
  end

  def show
    department = Department.find(params[:id])
    render component: "Department", props: { department: department }
  end

  def new
    render component: "DepartmentNew"
  end

  def create
    #creating a user in memory
    department = Department.new(department_params)
    if department.save
    #head back to the index page
    redirect_to departments_path
    else
      #TODO handle invalid input
    end
  end

  def edit
  end


  private

  def department_params
    params.require(:department).permit(:name, :manager, :num_employees)
  end
end
