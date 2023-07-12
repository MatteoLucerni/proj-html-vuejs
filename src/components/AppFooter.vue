<script>
import BaseSplitSection from './baseComps/BaseSplitSection.vue'
export default {
    components: {
        BaseSplitSection
    },
    props: {
        footerImages: Object,
        footerInfos: Object
    }
}
</script>

<template>
    <footer>
        <BaseSplitSection :images="footerImages" :isImageRight="true" :hasStarBg="true">
            <template v-slot>
                <div class="row">
                    <div class="col-4">
                        <h5>FIND OUR RESTURANTS</h5>
                        <ul>
                            <li v-for="resturant in footerInfos.resturants">
                                <p>
                                    {{ resturant }}
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div class="col-4">
                        <div>
                            <h5>
                                WORKING HOURS
                            </h5>
                            <ul>
                                <li v-for="hour in footerInfos.workingHours">
                                    <h6>
                                        {{ hour.title }}
                                    </h6>
                                    <p>
                                        {{ hour.desc }}
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div class="socials d-flex">
                            <h5>
                                FOLLOW US:
                            </h5>
                            <font-awesome-icon class="follow-icon" :icon="['fab', 'twitter']" />
                            <font-awesome-icon class="follow-icon" :icon="['fab', 'facebook-f']" />
                            <font-awesome-icon class="follow-icon" :icon="['fab', 'instagram']" />
                            <font-awesome-icon class="follow-icon" :icon="['fab', 'linkedin-in']" />
                        </div>
                    </div>
                    <div class="col-4">
                        THE DON PEPPE CREW FIRST AND FOREMOST VALUES AN AUTHENTIC. WELL BAKED SLICE OF PIZZA
                    </div>
                </div>
                <p class="subtitle">
                    Created with by <span class="author">Matteo Lucerni</span>
                </p>
                <img class="ensurace-logo" src="../assets/img/footer-bottom-img.png" alt="Quality Esurace">
            </template>
        </BaseSplitSection>
    </footer>
</template>

<style lang="scss" scoped>
@use '../assets/sass/vars' as *;



h5,
h6 {
    color: $gold;
}

h5 {
    margin-bottom: 15px;
}

p {
    color: gray;
    font-size: 0.8rem;
}

.socials {
    display: flex;
    align-items: center;

    h5 {
        margin-right: 10px;
        margin-bottom: 0;
    }
}

.subtitle {
    position: absolute;
    bottom: 20px;
    left: 50px;
    color: $gold;

    .author {
        color: $green;
    }
}

.ensurace-logo {
    position: absolute;
    right: 50px;
    bottom: 30px;
}

.follow-icon {
    font-size: 10px;
    margin-right: 5px;
}
</style>