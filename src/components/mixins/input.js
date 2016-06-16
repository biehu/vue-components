import validator from '../../utils/validator';

export default {
	data() {
        return {
            message: '',
            isValid: true
        };
    },
    
    props: ['name', 'rules', 'val'],
    
    events: {
        formValidate() {
            this.validate();
        }
    },
    
    methods: {
        validate() {
            if (!this.rules) return;
             
            var rule;
            
            for (var i = 0; i < this.rules.length; i++) {
				rule = this.rules[i];
                if (validator[rule[0]]) {
                    if (validator[rule[0]](this.val)) {
                        this.isValid = true;
                    } else {
                        this.isValid = false;
                        this.message = rule[1];
                        break;
                    }
                }
            }
			
			this.$dispatch('setAllValid', this.isValid);
        }
    }
};
