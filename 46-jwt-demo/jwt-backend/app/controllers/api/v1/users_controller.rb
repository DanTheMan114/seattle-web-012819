class Api::V1::UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def profile
    render json: { user: UserSerializer.new(current_user) }, status: :accepted
  end
 
  def create
    @user = User.create(user_params)
    if @user.valid?
      @token = encode_token(user_id: @user.id, permissions: "read|write", user: @user.to_json)
      render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
    else
      render json: { error: 'failed to create user' }, status: :not_acceptable
    end
  end

  def secret
    render json: [1, 2, 3, 4, 5]
  end
 
  private
 
  def user_params
    params.permit(:username, :password)
  end
end
