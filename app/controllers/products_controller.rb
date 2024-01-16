class ProductsController < ApplicationController
  before_action :set_product, only: [:edit, :update, :show, :destroy]
  after_action :generate_price_id, only: [:create]

  def index
    @products = Product.all
  end

  def new
    @product = Product.new
  end

  def create
    @product = Product.create(product_params)
    if @product.save!
      redirect_to products_path
    else
      render 'new'
    end
  end

  def update
    @product = Product.update(product_params)
    if @product.save!
      redirect_to edit_product_path(@product)
    else
      render 'edit'
    end
  end

  def destroy
    @product.destroy
    redirect_to products_path
  end

  private

  def generate_price_id
    product = Stripe::Product.create({
      name: @product.name
    })
    price = Stripe::Price.create({
      unit_amount: @product.price.to_i,
      currency: 'usd',
      product: product.id
    })    
    @product.price_id = price.id
    @product.save    
  end

  def product_params
    params.require(:product).permit(:name, :price)
  end

  def set_product
    @product = Product.find(params[:id])
  end

end
