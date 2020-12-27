<script>
    import { onMount } from "svelte";
    import Block from "../atomics/Block.svelte";
    import WhiteBlock from "../atomics/WhiteBlock.svelte";

    export let field;
    export let controller;

    console.log(field);
    let px = "10px";
    let focus_id = "";
    onMount(async () => {
        field.dig({ ...controller.currentPosition(), attack: 100 });
        focus_current_position();
    });

    const focus_current_position = () => {
        focus_id =
            field.brocks[controller.current_height][controller.current_width]
                .id;
        document.getElementById(focus_id).focus({ preventScroll: false });
    };

    // key controller
    document.addEventListener("keydown", (event) => {
        console.log(event.key)
        switch (event.key) {
            case "ArrowUp":
                controller.moveUp();
                break;
            case "ArrowDown":
                controller.moveDown();
                break;
            case "ArrowLeft":
                controller.moveLeft();
                break;
            case "ArrowRight":
                controller.moveRight();
                break;
            case "Enter":
                if (
                    controller
                        .getAroundPositions()
                        .every(
                            (pos) =>
                                !field.brocks[pos.height][pos.width].isBroken()
                        )
                ) {
                    return;
                }
                field.dig({ ...controller.currentPosition(), attack: 100 });
                // for updating ui
                field = field
                break;
        }
        focus_current_position();
        
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
