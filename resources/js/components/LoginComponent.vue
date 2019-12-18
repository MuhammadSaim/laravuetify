<template>
    <v-app id="inspire">
        <v-content>
            <v-container
                class="fill-height"
                fluid
            >
                <v-row
                    align="center"
                    justify="center"
                >
                    <v-col
                        cols="12"
                        sm="8"
                        md="4"
                    >
                        <v-card class="elevation-12">
                            <v-toolbar
                                color="deep-purple accent-4"
                                dark
                                flat
                            >
                                <v-toolbar-title>Login Form</v-toolbar-title>
                                <v-spacer />
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field
                                        label="Email"
                                        name="email"
                                        prepend-icon="mdi-mail"
                                        type="email"
                                        v-model="email"
                                    />

                                    <v-text-field
                                        id="password"
                                        label="Password"
                                        name="password"
                                        prepend-icon="mdi-lock"
                                        type="password"
                                        v-model="password"
                                    />
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer />
                                <v-btn color="deep-purple accent-4" dark @click="login">Login</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        mounted() {
            console.log(this.email, this.password);
        },
        data(){
            return{
                email: '',
                password: ''
            }
        },
        methods: {
            login: function () {
                localStorage.setItem("email", this.email);
                localStorage.setItem("password", this.password);
                console.log(this.email, this.password);
            }
        }
    }
</script>
