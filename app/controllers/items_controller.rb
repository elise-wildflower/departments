class ItemsController < ApplicationController
    before_action :set_department
    before_action :set_item, only: [:show]
  
    def index
      render component: "Items", props:{department: @department, items: @department.items}
    end
  
    def show
      @item = @department.items.find(params[:id])
      render json: @item
    end

    def new
      render component: "NewItem", props:{banana:@department}  #Putting in the value of department where we write the key "banana" in NewItem
    end
   
    def create
      @item = @department.items.new(item_params)  # The boolean might be throwing things off
      if(@item.save)
        redirect_to departments_items_path(@department.id)
      else
      end
    end

    def edit
    
    end



    private
    
    def set_department
      @department = Department.find(params[:department_id])
    end
  
    def set_item
      @item = @department.items.find(params[:id])
    end
  end