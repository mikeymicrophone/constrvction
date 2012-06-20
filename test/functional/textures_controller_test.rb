require 'test_helper'

class TexturesControllerTest < ActionController::TestCase
  setup do
    @texture = textures(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:textures)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create texture" do
    assert_difference('Texture.count') do
      post :create, texture: { image: @texture.image, name: @texture.name }
    end

    assert_redirected_to texture_path(assigns(:texture))
  end

  test "should show texture" do
    get :show, id: @texture
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @texture
    assert_response :success
  end

  test "should update texture" do
    put :update, id: @texture, texture: { image: @texture.image, name: @texture.name }
    assert_redirected_to texture_path(assigns(:texture))
  end

  test "should destroy texture" do
    assert_difference('Texture.count', -1) do
      delete :destroy, id: @texture
    end

    assert_redirected_to textures_path
  end
end
