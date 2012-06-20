class Design < ActiveRecord::Base
  belongs_to :form
  belongs_to :texture
  belongs_to :user
  attr_accessible :form_id, :texture_id
end
