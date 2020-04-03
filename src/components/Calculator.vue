<template>
  <div class="calculator">

    <div class="display">
      {{ displayEquals || display }}
    </div>

    <div class="buttons">

      <div class="numbers">
        <button 
          v-for="number in numbers"
          :key="number"
          @click="addNumber(number)"
        >
          {{ number }}
        </button>
      </div>

      <div class="actions">
        <button @click="addition()">+</button>
        <button @click="equals()">=</button>
      </div>

    </div>
    
  </div>
</template>

<script>
import { add } from '@/assets/calculator.js'

export default {
  name: 'Calculator',

  data() {
    return {
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      display: '',
      displayEquals: '',
      actions: {
        addition: false
      }
    }
  },

  methods: {
    addNumber(number) {
      if( this.displayEquals.length > 0 ) { 
        this.displayEquals = ''
      }

      if( this.display.length < 1 && number === 0 ) return

      this.display += String(number)

    },

    addition() {
      this.actions.addition = true
      this.display += ' + '
    },

    equals() {
      if( this.actions.addition ) {
        const nums = this.display.split(' + ')

        if( nums[0].length > 0 && nums[1].length > 0 ) {
          this.displayEquals = String( add( nums[0], nums[1] ) )
          this.display = ''

          this.actions.addition = false
        }
      }
    }
  }
}
</script>

<style scoped>
</style>
