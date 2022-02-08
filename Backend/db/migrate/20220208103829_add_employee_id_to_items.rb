class AddEmployeeIdToItems < ActiveRecord::Migration[7.0]
  def change
    add_column :items, :employee_id, :integer
    add_index :items, :employee_id
  end
end
