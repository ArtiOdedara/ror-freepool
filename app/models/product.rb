class Product < ApplicationRecord
  before_validation :create_on_product, on: :create

  validates :price_id, presence: true

  def create_on_product
    binding.pry

    product = Stripe::Product.create({
      name: self.name
    })
    price = Stripe::Price.create({
      unit_amount: self.price.to_i,
      currency: 'usd',
      product: product.id
    })    
    self.price_id = price.id
  end
end
