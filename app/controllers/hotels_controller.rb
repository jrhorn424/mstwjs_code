class HotelsController < ApplicationController

  respond_to :html, :json

  def index
    @hotels = Hotel.where(:id => params[:ids]).all
    respond_to do |format|
      format.html { render text: "", layout: "home" }
      format.json { render json: @hotels }
    end
  end

  def show
    @hotel = Hotel.find(params[:id])
    respond_to do |format|
      format.html { render text: "", layout: "home" }
      format.json { render json: @hotel }
    end
  end

end
