<template>
  <div class="ls-container">
    <div id="lightsaber">
      <div class="progress">
        <div class="glow-light"></div>
      </div>
      <div class="handle">
        <div class="bottom-plug"></div>
        <div class="bottom"></div>
        <div class="above-bottom"></div>
        <div class="light"></div>
        <div class="gold"></div>
        <div class="other-gold"></div>
        <div class="fin"></div>
      </div>
    </div>
    <div>
    <p id="loading">May the Force be with you </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" >


$darkNight: #2e3643;
$glowee: #fe4643;
$wyt: #fff;

$gry: #bfc0c0;
$gol: #d18710;


$lightgry: lighten($gry, 20%);

$darkgry: darken($gry, 20%);
$darkdarkgry: darken($gry, 40%);
$darkdarkdarkgry: darken($gry, 60%);
$darkdarkdarkdarkgry: darken($gry, 70%);

$lightgol: lighten($gol, 40%);
$darkgol: darken($gol, 20%);
$darkdarkgol: darken($gol, 30%);

$dedgol: desaturate($gol, 40%);
$lightdedgol: desaturate($lightgol, 40%);

*,
*:before,
*:after {
  box-sizing: border-box;
}

p {
     font-family: "Starjedi", Helvetica, Arial;
     color: #FFE71F;
     font-size: 2rem;
     letter-spacing: 0.07cm;;
}

@mixin before-and-after($position, $which) {
  @if ($position != null) {
    position: $position;
  }

  $selector: "";
  @if ($which==before) {
    $selector: "&:" + $which;
  } @else if($which==after) {
    $selector: "&:" + $which;
  } @else if($which==both) {
    $selector: "&:before,&:after";
  }
  @if ($which != null) {
    #{$selector} {
      content: "";
      display: block;
      @if ($position !=static) {
        position: absolute;
      }
    }
  }
}

.ls-container{
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-left: -15rem; */
    flex-direction: column;
    height: 100%;
    width: 100%;
}

%silverlight {
  background: linear-gradient(
    to bottom,
    $gry 20%,
    $darkgry 30%,
    $gry 50%,
    $gry 60%,
    $darkdarkgry 90%
  );
  border: 0.0625em solid $darkdarkgry;
  border-radius: 0.125em;
}

%blacklight {
  background: linear-gradient(
    to bottom,
    $darkdarkdarkgry 20%,
    $darkdarkdarkdarkgry 25%,
    $darkdarkdarkgry 40%,
    $darkdarkdarkgry 45%,
    $darkdarkdarkdarkgry 90%
  );
  border: 0.0625em solid $darkdarkdarkdarkgry;
}

#container {
  padding: 1em 0;
  width: 28em;
  height: 5em;
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}


#lightsaber {

  position: relative;
  margin-bottom: 2em;
  height: 1em;
  margin-left: -38rem;

  & > * {
    @include before-and-after(absolute, both);
    top: 0;
    bottom: 0;
    margin: auto 0;
  }

  & * {
    height: inherit;
  }

  .progress {
    background: black;
    width: 100%;
    left: 10.75em;
    top: -1em;
    bottom: -1em;
    margin: auto;
    height: 1.5em;
    width: 30rem;
    border-radius: 0 0.75em 0.75em 0;

    .glow-light {
      width: 0;
      left: -0.3125em;
      top: -1em;
      bottom: -1em;
      margin: auto;
      transition: all ease-in-out 0.5s;
      box-shadow: inset -0.25em 0 0.25em 0.25em $glowee, 0 0 0.25em 0 $glowee,
        0 0 1em 0.0625em rgba($glowee, 0.5);
      height: 0.875em;
      background: $wyt;
      border-radius: 0 0.5em 0.5em 0;
      animation: growth 3s linear 0.5s ;
      animation-fill-mode: forwards;
      position: absolute;
    }
  } 

  .handle {
    & > * {
      @include before-and-after(absolute, both);
      position: absolute;
      bottom: -1em;
      top: -1em;
      margin: auto;
    }

    .bottom-plug {
      width: 1em;
      @extend %silverlight;

      &:before {
        height: 0.375em;
        width: 0.5em;
        margin: auto;
        right: 0;
        left: 0;
        top: -0.125em;
        background: $lightgry;
        border: 0.0625em solid $gry;
        box-shadow: 0 0.875em 0 -0.0625em $lightgry, 0 0.875em 0 0 $gry;
      }
    }

    .bottom {
      width: 1.25em;
      left: 1em;
      border-radius: 0.125em;
      @extend %blacklight;

      &:before {
        width: 0.5em;
        height: 0.5em;
        border-radius: 50%;
        background: linear-gradient($darkdarkgry 0%, $darkdarkdarkgry 100%);
        border: 0.0625em solid $darkdarkdarkgry;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        box-shadow: 0 0 0 0.0625em $darkdarkdarkdarkgry,
          0 0.0625em 0 0.125em $darkdarkdarkdarkgry;
      }

      &:after {
        width: 0.25em;
        height: 0.25em;
        background: $darkdarkdarkdarkgry;
        border-radius: 50%;
        right: 0;
        left: 0;
        bottom: 0.125em;
        margin: 0 auto;
      }
    } 

    .above-bottom {
      left: 2.25em;
      width: 1.25em;
      @extend %silverlight;

      &:before {
        width: inherit;
        right: -0.125em;
        left: -0.125em;
        margin: auto;
        height: 0.625em;
        top: -0.5em;
        border: 0.0625em solid $gry;
        background: linear-gradient($darkdarkgry 0%, $gry 75%);
      }
    }
    .light {
      left: 3.5em;
      width: 2.5em;
      height: 0.875em;
      @extend %blacklight;
      background: linear-gradient(
        $darkdarkdarkgry 0%,
        $darkdarkdarkgry 10%,
        $darkdarkdarkdarkgry 50%,
        $darkdarkdarkgry 85%,
        $darkdarkdarkdarkgry 100%
      );

      &:before,
      &:after {
        height: 1.0625em;
        bottom: -1em;
        top: -1em;
        margin: auto;
      }

      &:before {
        background: linear-gradient(
          $darkdarkdarkgry 0%,
          $darkdarkdarkdarkgry 50%
        );
        width: 0.25em;
        border-radius: 0 0.25em 0.25em 0;
        border: 0.0625em solid $darkdarkdarkdarkgry;
        left: -0.0625em;
      }

      &:after {
        width: 0.125em;
        left: 0.25em;
        box-shadow: 0.25em 0 0 0 $darkdarkdarkdarkgry,
          0.5em 0 0 0 $darkdarkdarkdarkgry, 0.75em 0 0 0 $darkdarkdarkdarkgry,
          1em 0 0 0 $darkdarkdarkdarkgry, 1.25em 0 0 0 $darkdarkdarkdarkgry,
          1.5em 0 0 0 $darkdarkdarkdarkgry, 1.75em 0 0 0 $darkdarkdarkdarkgry,
          2em 0 0 0 $darkdarkdarkdarkgry;
        background: $darkdarkdarkdarkgry;
      }
    } 

    .gold {
      border-top: 0.0625em solid $dedgol;
      border-bottom: 0.0625em solid $dedgol;
      width: 0.75em;
      height: 0.625em;
      background: linear-gradient(
        $lightdedgol 0%,
        $lightdedgol 10%,
        $dedgol 50%,
        $lightdedgol 85%,
        $dedgol 100%
      );
      left: 6em;

      &:before {
        width: 0.5em;
        height: 1em;
        left: 100%;
        background: linear-gradient(
          $lightdedgol 0%,
          $lightdedgol 10%,
          $dedgol 50%,
          $lightdedgol 85%,
          $dedgol 100%
        );
        border: 0.0625em solid $dedgol;
        bottom: -1em;
        top: -1em;
        margin: auto;
      }
    } 

    .other-gold {
      height: 0.625em;
      width: 0.5em;
      background: linear-gradient(
        $gol 0%,
        $gol 10%,
        $darkgol 50%,
        $gol 70%,
        $darkdarkgol 100%
      );
      left: 7.25em;
      border-top: 0.0625em solid $darkgol;
      border-bottom: 0.0625em solid $darkgol;

      &:before {
        @extend %silverlight;
        border-right: 0;
        left: 100%;
        width: 0.25em;
        height: 0.875em;
        top: -1em;
        bottom: -1em;
        margin: auto;
        border-radius: 0;
      }
    } 

    .fin {
      left: 8em;
      width: 0.5em;
      @extend %silverlight;
      border-radius: 0;

      &:before,
      &:after {
        top: -1em;
        bottom: -1em;
        margin: auto;
      }

      &:before {
        width: 0.25em;
        height: 1em;
        @extend %silverlight;
        border-radius: 0;
        left: 100%;
        height: 1.25em;
      }

      &:after {
        width: 0.125em;
        background: $darkdarkgry;
        left: 0.5625em;
        height: 1.5em;
      }
    } 
  } 
} 

@keyframes growth {
0% {
    width: 0%;
  }
  20% {
    width: 20%;
  }
  40% {
    width: 40%;
  }
  60% {
    width: 60%;
  }

  80% {
    width: 80%;
  }

  100% {
    width: 100%;
  }
}
</style>