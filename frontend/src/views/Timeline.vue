<template lang="pug">
  div.container
    section.card(v-for="idx in count")
      div.card-head
        p
          img(src="http://nthumb.cyworld.com/thumb?width=60&height=60&url=http%3A%2F%2Fcyimg44.cyworld.com%2Fcommon%2Fvm_file_down.asp%3Fredirect%3D%252F440005%252F2019%252F4%252F13%252F87%252FCyHome_4601555147756566_891.jpg")
          strong 이 재훈
          p 2020.01.20
</template>
<script>
export default {
  name: 'Timeline',
  data () {
    return {
      count: 10
    }
  }
}
</script>
<style lang="scss" scoped>
  .container {
    display: block;
    position: relative;
    height: auto;
    overflow: auto;
    min-height: auto !important;
    top: 66px;
    background-color: rgba(var(--b3f,250,250,250),1);
    z-index: 1 !important;
  }
  .card{
    height: 400px;
    width: 400px;
    margin: 20px auto;
    border: 1px solid #ccc;
  }
  .card-head {
    padding: 25px 30px 11px 30px;
    text-align: left;
    position: relative;
    z-index: 2;
  }
  .card-head p {
    position: Relative;
    padding-left: 75px;
    font-size: 14px;
    color: #848484;
  }
  .card-head img {
    position: absolute;
    top: 0;
    left: 0;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    cursor: pointer;
  }
  .card-head strong {
    color: #202020;
    font-weight: normal;
    font-family: spoqaB;
    display: block;
    padding-bottom: 5px;
    padding-top: 15px;
  }
</style>
