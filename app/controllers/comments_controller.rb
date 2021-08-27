class CommentsController < ApplicationController
  before_action :set_item
  before_action :set_comment, only: [:show, :edit, :update, :destroy]

  def index
    render component: "Comments", props:{item:@item, comments:@item.comments}
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

  def set_comment
    @comment = @item.comment.find(params[:id])
  end

end
