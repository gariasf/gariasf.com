<template>
    <div id="social" class="flex flex-cross-center">
        <a href="https://www.twitter.com/gariasf" target="_blank"><Icon name="twitter" pointer="true" /></a>
        <a href="https://www.github.com/gariasf" target="_blank"><Icon name="github" pointer="true" /></a>
        <a href="https://telegram.me/TheWaterMelonMan" target="_blank"><Icon name="telegram" pointer="true" /></a>
        <a :href="writeEmail('link')">
            <p class="email-container pointer no-select"><Icon name="mail" pointer="true" />
                <span>{{this.$root.lang.footer.emailString}} <strong>{{writeEmail('text')}}</strong></span>
            </p>
        </a>
    </div>
</template>

<script>
    import Icon from './../../../Atoms/Icons.vue'
    
    export default {
        name: 'social',
        components: {
            Icon
        },
        methods: {
            writeEmail: function(type){
                { 
                /* This obfuscates the email so it's not a plain string in the resultant html and thus make it harder to send spam by scanning the page with bots, 
                /* that is, without running js to it
                /* I'm starting to think this is stupid, we are not in plain html, but I'll leave it here anyway.
                */
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
