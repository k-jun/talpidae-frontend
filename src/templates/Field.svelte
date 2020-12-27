<script>
    import Block from "../atomics/Block.svelte";
    import WhiteBlock from "../atomics/WhiteBlock.svelte";
    import { onMount } from "svelte";

    export let field;
    let px = "10px";
    let focus_id = "";
    let ch = Math.floor(Math.random() * Math.floor(field.height));
    let cw = Math.floor(Math.random() * Math.floor(field.width));
    onMount(async () => {
        focus_id = brocks[ch][cw].id;
        document.getElementById(focus_id).focus({ preventScroll: false });
        brocks[ch][cw].break = true;
    });

    // key controller
    document.addEventListener("keydown", (event) => {
        if (event.key == "ArrowDown" && ch != height - 1) {
            ch += 1;
        }
        if (event.key == "ArrowUp" && ch != 0) {
            ch -= 1;
        }

        if (event.key == "ArrowLeft" && cw != 0) {
            cw -= 1;
        }

        if (event.key == "ArrowRight" && cw != width - 1) {
            cw += 1;
        }
        if (event.key == "Enter") {
            let validator = false;
            if (
                (ch != 0 && brocks[ch - 1][cw].break) ||
                (ch != height - 1 && brocks[ch + 1][cw].break) ||
                (cw != 0 && brocks[ch][cw - 1].break) ||
                (cw != width - 1 && brocks[ch][cw + 1].break)
            ) {
                validator = true;
            }
            if (validator) {
                brocks[ch][cw].break = true;
            }

            if (brocks[ch][cw].goal) {
                alert("game clear!!");
                alert("thanks for playing!!");
            }
        }
        focus_id = brocks[ch][cw].id;
        document.getElementById(focus_id).focus({ preventScroll: false });
    });
</script>

<style>
    main {
        display: flex;
        flex-direction: column;

        /* height: 100%; */
        position: absolute;
        top: 0;
        bottom: 0;
        padding: auto;
        z-index: -1;
    }
    .row {
        display: flex;
        flex-direction: row;
    }
    .block {
        flex: 1;
        position: relative;
        /* border: 1px solid black; */
    }
    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100px;
        height: 100px;
        background: rgba(255, 0, 0, 0.5);
    }
</style>

<main>
    {#each field.brocks as row}
        <div class="row">
            {#each row as brock}
                <div class="block" tabindex="0" id={brock.id}>
                    {#if brock.durable == 0}
                        <WhiteBlock {px} />
                    {:else}
                        <Block {px} />
                    {/if}
                    {#if focus_id == brock.id}
                        <div class="overlay" />
                    {/if}
                </div>
            {/each}
        </div>
    {/each}
</main>
