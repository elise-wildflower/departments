class CommentsController < ApplicationController
  before_action :set_item
  before_action :set_comment, only: [:show, :edit, :update, :destroy]

  def index
    render component: "Comments", props:{item:@item, comments:@item.comments}
  end

  def show
  end

  def new
    render component: "NewComment", props:{item:@item}
  end

  def create
    @comment = @item.comments.new(comment_params)
    if(@comment.save)
      redirect_to item_comments_path(@item.id)
    else
    end
  end

  # def create
  #   @item = @department.items.new(item_params)  # The boolean might be throwing things off
  #   if(@item.save)
  #     redirect_to department_items_path(@department.id)
  #   else
  #   end
  # end


  def edit
  end

private 

  def comment_params
    params.require(:comment).permit(:title, :body)
  end

  def set_item
    @item = Item.find(params[:item_id])
  end

  def set_comment
    @comment = @item.comment.find(params[:id])
  end

end
