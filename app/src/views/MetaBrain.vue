<template>
  <q-page id="m-brain" class="q-pa-lg">

      <div class="my-title text-h3 text-white">Get Your M-Brain</div>
      <div class="q-py-xl"/>
      <div class="my-title text-h5 text-white">
        Currently in progress!<br/>
        In the meantime, learn more about 
        <span style="cursor:pointer;color:#00f2a1;"
            @click="$router.push({ name: 'About', hash: '#meta-brains'})"
        >M-Brains
      </span>
      </div>
      <div class="q-py-xl"/>


      <div align="center" class="home flex-center">
        <div class="col q-pa-md" style="max-width:640px;">
          <div 
            class="my-text q-py-md row justify-center text-h4 text-weight-bold"
            style="border: 3px solid #4c4886;background-color:#01000b;color: #00f2a1"
          >
              M-Brain
          </div>
            <div
            class="gt-xs my-text q-py-md row justify-center text-h6 text-weight-bold text-dark"
            style="margin-left: 0.5%;width:99%;background-color:#4c4886;"
            >
            Activate your M-Brain!
            <div class="q-py-sm"/>
            </div>

            <div
            class="lt-sm my-text q-py-md row justify-center text-subtitle1 text-weight-bold text-dark"
            style="margin-left: 0.5%;width:99%;background-color:#4c4886"
            >
            Activate your M-Brain!
            <div class="q-py-xs"/>
            </div>

          <div style="border: 3px solid #4c4886;background-color:#01000b">

              <!-- ITEMS CARD -->
              <div class="q-pa-xl row justify-center q-gutter-md">
                  <div class="q-pa-md flex justify-center">
                      <div>
                          <div align="center" class="my-text text-white text-subtitle2">
                          <div class="my-title text-subtitle2 text-grey-8">
                            
                            Comming soon
                            <br/><br/>
                            <q-spinner-box 
                                color="secondary" size="1.5em"
                            />
                            <q-spinner-box 
                                color="secondary" size="1.5em"
                            />
                            <q-spinner-box 
                                color="secondary" size="1.5em"
                            />  

                          </div>
                      </div>
                      </div>
                  </div>
              </div>

          </div>
        </div>
    </div>


      <!--
      <div class="my-title text-subtitle2 text-white">
        Find us on Discord 
        &nbsp;&nbsp;
        <a tag="a" target="_blank" href="https://discord.com/invite/uXJDA3CC">
            <q-icon color="white" size="1.5em" name="fab fa-discord"/>
        </a>
        <br/>
        or follow us on twitter
        &nbsp;&nbsp;
        <a tag="a" target="_blank" href="https://twitter.com/metabrainz_io">
            <q-icon color="white" size="1.5em" name="fab fa-twitter"/>
        </a>
      </div>
      -->
  </q-page>
</template>