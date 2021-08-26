class CommentsController < ApplicationController
  # before_action :set_department
  # before_action :set_item, only: [:show, :edit, :update, :destroy]

  def index
    render component: "Comments", props:{item: @item, comments: @item.comments}
  end

  def show
  end

  def new
  end

  def edit
  end

private 

  # def set_department
  #   @department = Department.find(params[:department_id])
  # end

  # def set_item
  #   @item = @department.items.find(params[:id])
  # end

end
