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
				<button class="addition" @click="addition()">+</button>
				<button class="subtraction" @click="subtraction()">+</button>
				<button class="equals" @click="equals()">=</button>
			</div>
		</div>
	</div>
</template>

<script>
import { add, sub } from '@/assets/calculator.js'

export default {
	name: 'Calculator',

	data() {
		return {
			numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
			display: '',
			displayEquals: '',
			actions: {
        addition: false,
        subtraction: false
			},
		}
	},

	methods: {
		addNumber(number) {
			if (this.displayEquals.length > 0) {
				this.displayEquals = ''
			}

			if (this.display.length < 1 && number === 0) return

			this.display += String(number)
		},

		addition() {
			this.actions.addition = true
			this.display += ' + '
    },

		subtraction() {
			this.actions.subtraction = true
			this.display += ' - '
		},

		equals() {
			if (this.actions.addition) {
				const nums = this.display.split(' + ')

				if (nums[0].length > 0 && nums[1].length > 0) {
					this.displayEquals = String(add(nums[0], nums[1]))
					this.display = ''

					this.actions.addition = false
				}
      }
      
      if (this.action.subtraction) {
        const nums = this.display.split(' - ')

        if(nums[0].length > 0 && nums[1].length > 0) {
          this.displayEquals = String(sub(nums[0], nums[1]))
          this.display = ''

          this.actions.subtraction = false
        }
      }
		},
	},
}
</script>

<style lang="scss" scoped>
.calculator {
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr 3fr;
	grid-gap: 3px;
  height: 400px;

	width: 350px;
	margin-left: auto;
	margin-right: auto;

  button {
    border: none;
    border-radius: 10px;
    background-color: #333;
    color: #fff;
    font-size: 2em;
    font-weight: bold;
  }

	.display {
		grid-column: 1;
		grid-row: 1;

    padding: 0.5em;
    font-size: 3em;
    background-color: #999;
    color: whitesmoke;
    box-sizing: border-box;
    border-bottom: 5px solid #fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
	}

	.buttons {
		grid-column: 1;
		grid-row: 2;

    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 5px;

    .numbers {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: repeat(3, 3fr) 3fr;
      grid-gap: 5px;

      button:nth-child(1) {
        grid-column: 1 / 4;
        grid-row: 4;
      }
    }

    .actions {
      display: grid;
      grid-template-rows: repeat(4, 1fr);
      grid-gap: 5px;

      .equals {
        grid-row: 4;
      }
    }
	}
}
</style>
