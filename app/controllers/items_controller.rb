class ItemsController < ApplicationController
    before_action :set_department
    before_action :set_item, only: [:show, :edit, :update, :destroy]

  #TODO Something is wrong with my boolean for item_params

    def index
      render component: "Items", props:{department: @department, items: @department.items}
    end
  
    # def show
    #   @item = @department.items.find(params[:id])
    #   render component: "Comments", props:{item:@item, comments:@item.comments}# ADD HIS CODE HERE THAT TAKES YOU TO THE ITEM AND ITS COMMENTS
    # end

    def new
      render component: "NewItem", props:{department:@department}  #Putting in the value of department where we write the key "banana" in NewItem
    end
   
    def create
      @item = @department.items.new(item_params)  # The boolean might be throwing things off
      if(@item.save)
        redirect_to departments_items_path(@department.id)
      else
      end
    end

    def edit
      render component: "EditItem", props:{department:@department, item:@item}
    end

    def update
      if(@item.update(item_params))
        redirect_to departments_items_path(@department.id)
      else
      end
    end

    def destroy
      @item.destroy
      redirect_to department_items_path
    end


    private

    def item_params
      params.require(:item).permit(:name, :sale)
    end
    
    def set_department
      @department = Department.find(params[:department_id])
    end
  
    def set_item
      @item = @department.items.find(params[:id])
    end
  end