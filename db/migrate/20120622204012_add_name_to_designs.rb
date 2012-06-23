class AddNameToDesigns < ActiveRecord::Migration
  def change
    add_column :designs, :title, :string
    add_column :designs, :description, :string
  end
end
