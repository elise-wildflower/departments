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
    comment = @item.comments.new(comment_params)
    if(comment.save)
      redirect_to item_comments_path(@item.id)
    else
    end
  end


  def edit
    render component: "EditComment", props:{item:@item, comment:@comment}
  end

  def update
    if(@comment.update(comment_params))
      redirect_to item_comments_path(@item.id)
    end
  end




  def destroy
    @comment.destroy
    redirect_to item_comments_path
  end


private 

  def comment_params
    params.require(:comment).permit(:title, :body)
  end

  def set_item
    @item = Item.find(params[:item_id])
  end

  def set_comment
    @comment = @item.comments.find(params[:id])
  end

end
