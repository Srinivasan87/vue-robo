<template>
  <div>
    <div class="top-row">
      <div class="top part">
        <div v-once class="robot-name">{{ selectedRobot.Head.title }}</div>
        <img v-bind:src="selectedRobot.Head.src" title="Head"/>
        <button v-on:click="selectPreviousHead()" class="prev-selector">&#9668;</button>
        <button v-on:click="selectNextHead()" class="next-selector">&#9658;</button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <img v-bind:src="selectedRobot.LeftArm.src" title="Left Arm"/>
        <button v-on:click="selectPreviousLeftArm()" class="prev-selector">&#9650;</button>
        <button v-on:click="selectNextLeftArm()" class="next-selector">&#9660;</button>
      </div>
      <div class="center part">
        <img v-bind:src="selectedRobot.Torso.src" title="Torso"/>
        <button v-on:click="selectPreviousTorso()" class="prev-selector">&#9668;</button>
        <button v-on:click="selectNextTorso()" class="next-selector">&#9658;</button>
      </div>
      <div class="right part">
        <img v-bind:src="selectedRobot.RightArm.src" title="Right Arm"/>
        <button v-on:click="selectPreviousRightArm()" class="prev-selector">&#9650;</button>
        <button v-on:click="selectNextRightArm()" class="next-selector">&#9660;</button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <img v-bind:src="selectedRobot.Base.src" title="Base"/>
        <button v-on:click="selectPreviousBase()" class="prev-selector">&#9668;</button>
        <button v-on:click="selectNextBase()" class="next-selector">&#9658;</button>
      </div>
    </div>
  </div>
</template>

<script>
import availableParts from '../data/parts';

function getPreviousvalidIndex (index, length){
  const deprecatedIndex = index-1;
  return deprecatedIndex < 0 ? length -1: deprecatedIndex;
}

function getNextvalidIndex (index, length){
  const incrementedIndex = index+1;
  return incrementedIndex > length -1 ? 0 : incrementedIndex;
}

export default{
    name:'RobotBuilder',
    data(){
      return {
        availableParts,
        selectedHeadIndex: 0,
        selectedLeftArmIndex: 0,
        selectedTorsoIndex: 0,
        selectedRightArmIndex: 0,
        selectedBaseIndex: 0,
      };
    },
    computed: {
      selectedRobot() {
        return{
          Head: availableParts.heads[this.selectedHeadIndex],
          LeftArm: availableParts.arms[this.selectedLeftArmIndex],
          Torso: availableParts.torsos[this.selectedTorsoIndex],
          RightArm: availableParts.arms[this.selectedRightArmIndex],
          Base: availableParts.bases[this.selectedBaseIndex],
        };
      },
    },
    methods: {
      selectNextHead(){
        this.selectedHeadIndex = getNextvalidIndex(this.selectedHeadIndex,availableParts.heads.length);
      },
      selectPreviousHead(){
         this.selectedHeadIndex = getPreviousvalidIndex(this.selectedHeadIndex,availableParts.heads.length);
      },

      selectNextLeftArm(){
        this.selectedLeftArmIndex = getNextvalidIndex(this.selectedLeftArmIndex,availableParts.arms.length);
      },
      selectPreviousLeftArm(){
         this.selectedLeftArmIndex = getPreviousvalidIndex(this.selectedLeftArmIndex,availableParts.arms.length);
      },

      selectNextTorso(){
        this.selectedTorsoIndex = getNextvalidIndex(this.selectedTorsoIndex,availableParts.torsos.length);
      },
      selectPreviousTorso(){
         this.selectedTorsoIndex = getPreviousvalidIndex(this.selectedTorsoIndex,availableParts.torsos.length);
      },

      selectNextRightArm(){
        this.selectedRightArmIndex = getNextvalidIndex(this.selectedRightArmIndex,availableParts.arms.length);
      },
      selectPreviousRightArm(){
         this.selectedRightArmIndex = getPreviousvalidIndex(this.selectedRightArmIndex,availableParts.arms.length);
      },

      selectNextBase(){
        this.selectedBaseIndex = getNextvalidIndex(this.selectedBaseIndex,availableParts.bases.length);
      },
      selectPreviousBase(){
         this.selectedBaseIndex = getPreviousvalidIndex(this.selectedBaseIndex,availableParts.bases.length);
      }
    }
};
</script>

<style>
.robot-name{
  position:absolute;
  top: -25px;
  text-align: center;
  width: 100%;
}
.part {
  position: relative;
  width:165px;
  height:165px;
  border: 3px solid #aaa;
} 
.part img {
  width:165px;
}
.top-row {
  display:flex;
  justify-content: space-around;
}
.middle-row {
  display:flex;
  justify-content: center;
}
.bottom-row {
  display:flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector, .center .next-selector {
  opacity:0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;    
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;  
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;    
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
</style>