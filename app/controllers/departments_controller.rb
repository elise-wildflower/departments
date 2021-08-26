class DepartmentsController < ApplicationController
  before_action :set_department, only:[:show,:update,:edit,:destroy]
  
  def index
    # with rails mvc rails will look for the fill named index.html.erb
    # departments
    # get all departments
    departments = Department.all # interacting with model
    render component:"Departments", props:{departments:departments} #handing departments to react compon
  end


  def show
    # department = department.find(params[:id])
    render component: "Department", props:{department:@department}
  end


  def new
    # render "departmentsNew", props:{department:@department} # be the form
   render component: "DepartmentNew"
  end

  def create
    # render "departmentsNew" # be the form
    @department = Department.new(department_params)
    if(@department.save)
      redirect_to root_path
    else
      render :new
    end
  end

  def edit
    # department = department.find(params[:id])
    render component: "DepartmentEdit", props:{department: @department}
  end

  def update
    # @department = department.find(params[:id])
    if department.update(department_params)
      redirect_to departments_path
    end
  end


  def destroy
    @department.destroy
    redirect_to root_path
  end

  private

  def department_params
    params.require(:department).permit(:name)
  end
  
  def set_department
    @department = Department.find(params[:id])
  end
end
