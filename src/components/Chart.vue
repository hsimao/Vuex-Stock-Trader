<template>
  <div class="chart">
    <div class="title">STOCKS SALES</div>
    <canvas id="myChart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'

export default {
  mounted() {
    const chartEl = document.getElementsByClassName('chart')[0]
    const canvas = document.getElementById('myChart')
    const ctx = canvas.getContext('2d')
    let chartW = canvas.width = chartEl.clientWidth
    canvas.height = chartEl.clientHeight

    var bg1 = ctx.createLinearGradient(0, 0, 0, chartW)
    bg1.addColorStop(0, 'rgba(172, 92, 250, 0.9)')
    bg1.addColorStop(0.5, 'rgba(172, 92, 250, 0.7)')
    bg1.addColorStop(1, 'rgba(172, 92, 250, 0.7)')

    var bg2 = ctx.createLinearGradient(0, 0, 0, chartW)
    bg2.addColorStop(0, 'rgba(52, 225, 202, 0.9)')
    bg2.addColorStop(0.5, 'rgba(52, 225, 202, 0.7)')
    bg2.addColorStop(1, 'rgba(52, 225, 202, 0.7)')

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
        datasets: [{
          label: 'FIRST PRODUCTS',
          borderWidth: '0',
          backgroundColor: bg1,
          data: [0, 20, 10, 45, 20, 35, 20, 10]
        }, {
          label: 'SECOND PRODUCTS',
          borderWidth: '0',
          backgroundColor: bg2,
          data: [2, 10, 10, 20, 20, 15, 10, 15]
        }]
      },
      options: {
        layout: {
          padding: {
            left: 30,
            right: 30,
            top: 30,
            bottom: 30
          }
        },
        responsive: true,
        tooltips: {
          mode: 'index'
        },
        hover: {
          mode: 'index'
        },
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Days'
            }
          }],
          yAxes: [{
            stacked: true,
            scaleLabel: {
              display: true,
              labelString: 'Value'
            }
          }]
        }
      }
    })

    window.onresize = function() {
      chartW = canvas.width = chartEl.clientWidth
      canvas.height = chartEl.clientHeight
    }
  }
}
</script>

<style lang="sass" scoped>
.chart
  margin-top: 30px
  margin-bottom: 30px
  box-shadow: 0 20px 40px 0 rgba(black,0.2)
  background-color: rgba(white,0.7)
  box-shadow: 0 20px 40px 0 rgba(black, 0.2)
  overflow: hidden
  height: 400px
  .title
    position: relative
    top: 20px
    left: 30px
</style>
