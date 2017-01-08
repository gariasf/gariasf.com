<template>
    <div id="social" class="flex flex-cross-center">
        <SocialIcon iconName="twitter" />
        <SocialIcon iconName="github" />
        <SocialIcon iconName="telegram" />
        <p class="email-container pointer"><SocialIcon iconName="mail" /><span>{{this.$root.lang.contact.emailString}} {{writeEmail()}}</span></p>
    </div>
</template>

<script>
    import SocialIcon from './../../../Atoms/SocialIcon.vue'
    
    export default {
        name: 'social',
        components: {
            SocialIcon
        },
        methods: {
            writeEmail: function(){
                { let coded = "C3GGd@JBF6Ban.Kdt";
                let key = "gWlNSVpExKIRU4QawJ0GeDifoLqurY5PBkmOA3T6ndhHbF9Zjv1tMXcy8z2Cs7";
                let shift=coded.length;
                let link="";
                for (let i=0; i<coded.length; i++) {
                    if (key.indexOf(coded.charAt(i))==-1) {
                        let ltr = coded.charAt(i);
                        link += (ltr);
                    }
                    else {
                        let ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length;
                        link += (key.charAt(ltr));
                    }
                }
                return link;
                }
            }
        }
    }
</script>
