<template>
  <div class="card p-4 mb-5" :class="`has-background-${bgColor}-dark`">
    <label class="label has-text-white" v-if="label">{{ label }}</label>
    <div class="field">
      <div class="control">
        <textarea v-model="modelValue" class="textarea"
          @input="$emit('update:modelValue', modelValue)"
          :placeholder="placeholder" ref="textareaRef" v-autofocus
          maxlength="100" />
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity"
import { vAutofocus } from "../../directives/vAutofocus";


const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  bgColor: {
    default: "success"
  },
  placeholder: {
    type: String,
    default: "Type something..."
  },
  label: {
    type: String,
  }

})
const emit = defineEmits(['update:modelValue'])
const textareaRef = ref(null)

const focusTextarea = () => {
  textareaRef.value.focus()
}
defineExpose({
  focusTextarea
})

</script>