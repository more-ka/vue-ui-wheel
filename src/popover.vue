<template>
    <div class="popover" ref="popover">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible" :class="{[`position-${position}`]:true}">
            <slot name="content" :close="close"></slot>
        </div>
        <span ref="buttonWrapper">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: "GuLuPopover",
        props: {
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
                }
            },
            trigger: {
                type: String,
                default: 'click',
                validator(value) {
                    return ['click', 'hover'].indexOf(value) >= 0
                }
            }
        },
        data() {
            return {visible: false};
        },
        computed: {
            openEvent() {
                if (this.trigger === 'click') {
                    return 'click'
                } else {
                    return 'mouseenter'
                }
            },
            closeEvent() {
                if (this.trigger === 'click') {
                    return 'click'
                } else {
                    return 'mouseleave'
                }
            }
        },
        mounted() {
            if (this.trigger === 'click') {
                this.$refs.popover.addEventListener('click', this.onClick)
            } else {
                this.$refs.popover.addEventListener('mouseenter', this.open);
                this.$refs.popover.addEventListener('mouseleave', this.close)
            }
        },
        destroyed(){
            if (this.trigger === 'click') {
                this.$refs.popover.addEventListener('click', this.onClick)
            } else {
                this.$refs.popover.addEventListener('mouseenter', this.open);
                this.$refs.popover.addEventListener('mouseleave', this.close)
            }
        },
        methods: {
            positionContent() {
                const {contentWrapper} = this.$refs;
                document.body.appendChild(contentWrapper);
                let {height, width, left, top} = this.$refs.buttonWrapper.getBoundingClientRect();
                let height2 = contentWrapper.getBoundingClientRect().height;
                let positionValue = {
                    top: {left: left + window.scrollX, top: top + window.scrollY},
                    bottom: {left: left + window.scrollX, top: top + height + window.scrollY},
                    left: {left: left + window.scrollX, top: top + (height - height2) / 2 + window.scrollY},
                    right: {left: left + window.scrollX + width, top: top + (height - height2) / 2 + window.scrollY}
                };
                contentWrapper.style.top = positionValue[this.position].top + 'px';
                contentWrapper.style.left = positionValue[this.position].left + 'px'
            },
            onClickDocument(e) {
                if (this.$refs.popover &&
                    (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))) {
                    return
                }
                if (this.$refs.contentWrapper &&
                    (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))) {
                    return
                }
                this.close()
            },
            open() {
                this.visible = true;
                this.$nextTick(() => {
                    this.positionContent();
                    document.addEventListener("click", this.onClickDocument);
                });
            },
            close() {
                this.visible = false;
                document.removeEventListener("click", this.onClickDocument)
            },
            onClick(event) {
                if (this.$refs.buttonWrapper.contains(event.target)) {
                    if (this.visible === true) {
                        this.close()
                    } else {
                        this.open()
                    }
                }
            }
        }
    };
</script>

<style lang="scss" scoped>
    $border-radius: 4px;
    $distance: 12px;
    .popover {
        display: inline-block;
        position: relative;
    }
    .content-wrapper {
        position: absolute;
        border-radius: $border-radius;
        left: 0;
        border: 1px solid black;
        padding: 0.5em 1em;
        /*box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);*/
        filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
        background: white;
        max-width: 16em;
        word-break: break-all;
        &::before, &::after {
            position: absolute;
            display: block;
            content: '';
            border: 6px solid transparent;
            width: 0;
            height: 0;
        }
        &.position-top {
            transform: translateY(-100%);
            margin-top: -$distance;
            &::before {
                border-top-color: black;
                top: 100%;
                border-bottom: none;
            }
            &::after {
                border-top-color: white;
                top: calc(100% - 1px);
                border-bottom: none;
            }
        }
        &.position-bottom {
            margin-top: $distance;
            &::before {
                border-bottom-color: black;
                bottom: 100%;
                border-top: none;
            }
            &::after {
                border-bottom-color: white;
                bottom: calc(100% - 1px);
                border-top: none;
            }
        }
        &.position-left {
            transform: translateX(-100%);
            margin-left: -$distance;
            &::before {
                border-left-color: black;
                transform: translateY(-50%);
                top: 50%;
                left: 100%;
                border-right: none;
            }
            &::after {
                border-left-color: white;
                transform: translateY(-50%);
                top: 50%;
                left: calc(100% - 1px);
                border-right: none;
            }
        }
        &.position-right {
            margin-left: $distance;
            &::before {
                border-right-color: black;
                transform: translateY(-50%);
                top: 50%;
                right: 100%;
                border-left: none;
            }
            &::after {
                border-right-color: white;
                transform: translateY(-50%);
                top: 50%;
                right: calc(100% - 1px);
                border-left: none;
            }
        }
    }

</style>