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

  def set_item
    @item = Item.find(params[:item_id])
  end

  # def set_comment
  #   @comment = @department.items.find(params[:id])
  # end

end
