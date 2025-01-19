<template>
    <div class="model">
        <div class="body">
            <slot></slot>
        </div>
        <div class="overlay"></div>
    </div>
</template>
<style lang="scss">
.model {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    .overlay {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(36, 36, 36, 0.39);
        z-index: -1;
    }
    .body {
        background-color: $background;
        padding: 24px 16px;
        border-radius: 8px;
        max-width: 313px;
        width: 100%;
        .headingContainer {
            display: flex;
            justify-content: space-between;
            gap: 12px;
            h2 {
                margin: 0 0 28px;
                font-size: 20px;
                color: $textSecondary;
            }
            button {
                height: fit-content;
            }
        }
        .input {
            width: 100%;
            margin-bottom: 16px;
            padding: 8px 12px;
            border: 1px solid $cardboard;
            border-radius: 4px;
            font-size: 14px;
            font-size: 16px;
            line-height: 24px;
            &:last-of-type {
                margin-bottom: 0;
            }
        }
        .pagination {
            display: flex;
            gap: 3px;
            width: 100%;
            justify-content: center;
            align-items: center;
            margin: 28px 0;
            span {
                display: block;
                height: 4px;
                width: 4px;
                border: 1.5px solid $secondary;
                border-radius: 4px;
                flex-shrink: 0;
                &.active {
                    background-color: $secondary;
                }
            }
        }
        .modelButton {
            min-width: 232px;
            padding: 16px;
            text-align: center;
            background-color: $secondary;
            color: $primaryContrast;
            border-radius: 100px;
            margin: 0 auto;
            display: block;
            &.white {
                background-color: $background;
                color: $secondary;
                margin-top: 12px;
            }
            &.red {
                background-color: $error;
            }
        }
    }
}
</style>