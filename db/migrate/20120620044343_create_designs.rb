class CreateDesigns < ActiveRecord::Migration
  def change
    create_table :designs do |t|
      t.belongs_to :form
      t.belongs_to :texture
      t.belongs_to :user

      t.timestamps
    end
    add_index :designs, :form_id
    add_index :designs, :texture_id
    add_index :designs, :user_id
  end
end
