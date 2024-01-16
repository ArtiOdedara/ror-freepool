require 'stripe'

class PaymentsController < ApplicationController
  YOUR_DOMAIN = 'http://localhost:3000'

  def make_payment
    @product = Product.last
    # This is your test secret API key. 
    session = Stripe::Checkout::Session.create(
      customer: current_user.stripe_id,
      client_reference_id: current_user.id,
      success_url:	YOUR_DOMAIN + '/success',
      cancel_url: YOUR_DOMAIN + '/failed',
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [{
        # Provide the exact Price ID (e.g. pr_1234) of the product you want to sell
        price: @product.price_id,
        quantity: 1,
      }]
    )
    redirect_to session.url, status: 303, allow_other_host: true   
  end

  def success;end

  def failure;end
end
