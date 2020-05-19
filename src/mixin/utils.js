export default {
  methods: {
    /**
     * @description 组件属性默认值
     */
    handleAttribute (attribute, defaultValue) {
      if (attribute === false || attribute === 0 || attribute === '') {
        return attribute
      }
      return attribute || defaultValue
    },
    /**
     * @description 根据dialog模式渲染不同表单
     */
    handleFormTemplateMode (key) {
      let item = null
      if (this.formMode === 'edit') {
        item = this.editTemplateStorage[key]
      } else if (this.formMode === 'add') {
        item = this.addTemplateStorage[key]
      }
      if (item == null) {
        item = { component: {} }
      }
      return item
    },
    /**
     * @description 根据dialog模式渲染不同表单校验规则
     */
    handleFormRulesMode () {
      if (this.formMode === 'edit') {
        return this.editRules
      } else if (this.formMode === 'add') {
        return this.addRules
      }
    }
  }
}
