<template>
    <div id="social" class="flex flex-cross-center">
        <a href="https://www.twitter.com/gariasf" target="_blank"><SocialIcon iconName="twitter" /></a>
        <a href="https://www.github.com/gariasf" target="_blank"><SocialIcon iconName="github" /></a>
        <a href="https://telegram.me/TheWaterMelonMan" target="_blank"><SocialIcon iconName="telegram" /></a>
        <a v-bind:href="writeEmail('link')"><p class="email-container pointer"><SocialIcon iconName="mail" /><span>{{this.$root.lang.contact.emailString}} <strong>{{writeEmail('text')}}</strong></span></p></a>
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
            writeEmail: function(type){
                { /* This obfuscates the email so it's not a plain string in the resultant html and thus make it harder to send spam by scanning the page with bots, that is, without running js to it */
                let coded = "C3GGd@JBF6Ban.Kdt";
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
                /* Data binding only allows simple statements, it's better to format the data here using the sent argument when calling the method*/
                if(type == 'link'){
                    return 'mailto:' + link;
                } else if(type == 'text') {
                    return link;
                }
                }
            }
        }
    }
</script>
