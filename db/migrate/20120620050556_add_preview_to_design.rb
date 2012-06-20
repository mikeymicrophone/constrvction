class AddPreviewToDesign < ActiveRecord::Migration
  def change
    add_column :designs, :preview, :string
  end
end
