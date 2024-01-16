class User < ApplicationRecord
  before_validation :create_on_stripe, on: :create
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :stripe_id, presence: true

  def create_on_stripe
    params = { email: email }
    response = Stripe::Customer.create(params)
    self.stripe_id = response.id
  end
end
