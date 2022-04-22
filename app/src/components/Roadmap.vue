<template>
    <div id="roadmap"></div>
        <div 
            class="gt-sm row my-text text-white"
            style="background-color:#01000b;" 
        >
        <div class="col">
        <div class="q-py-xl"/>

            <div align="center" class="text-h3 text-weight-bold">ROADMAP</div>
            <div class="q-py-lg"/>
            <div class="row">
            <div class="col flex justify-center">
                <q-list>
                <q-item 
                    v-for="item in roadmap" 
                    :key="item"
                >
                    <div class="q-py-sm"/>
                    <q-item-section>
                        <q-item-label>
                            <q-avatar 
                                v-if="item.phase"
                                size="2rem" color="transparent" text-color="transparent" icon="remove" 
                            />
                            <q-avatar 
                                v-if="item.todo"
                                size="2rem" color="transparent" text-color="white" icon="" 
                            />
                            <!--
                            <q-spinner-hourglass 
                                v-if="item.next"
                                color="teal-10" size="2.25em"
                            />
                            -->  
                             <q-icon v-if="item.next" name="hourglass_top" color="secondary" size="2rem" />
                            <q-spinner-box 
                                v-if="item.progress"
                                color="secondary" size="2.25em"
                            />
                             <q-icon v-if="item.done" name="done" color="secondary" size="2rem" />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span v-if="item.phase && item.active" class="text-h6 text-weight-bolder">
                                <span class="text-h5 text-secondary">{{item.task}}</span>
                                &nbsp;&nbsp;&nbsp;<span class="text-subtitle1 text-negative">{{item.time}}</span>
                            </span>
                            <span v-else>
                                <span v-if="item.phase && !item.active" class="text-h6 text-weight-bolder">
                                    <span class="text-h5" style="color: #004d33;">{{item.task}}</span>
                                    &nbsp;&nbsp;&nbsp;<span class="text-subtitle1" style="color: #571e36;">{{item.time}}</span>
                                </span>
                                <span v-else class="text-white">
                                    {{item.task.substring(8,item.task.length)}}
                                </span>
                            </span>
                        </q-item-label>
                    </q-item-section>
                    <q-item-section avatar>
                    </q-item-section>
                </q-item>
                </q-list>
            </div>
            </div>
            <div class="q-py-xl"/>
        </div>
        </div>
        <!-- CONTENT: MOBILE
            style="background-color: #01031a"
        -->
        <div id="roadmap"></div>
        <div 
            class="lt-md row items-start"
            style="background-color:#01000b;" 
        >
            <div 
                class="col q-py-md flex justify-center"
            >
            <div class="q-py-xl q-pa-lg q-gutter-md">
                <div 
                    align="center"
                    class="my-text text-h4 text-weight-bold text-white"
                >
                    ROADMAP
                </div>
                <q-list padding 
                    class="my-text q-py-lg text-white" style="max-width: 350px;">
                    <q-item style="height:50px;"
                        v-for="item in roadmap" 
                        :key="item"
                    >
                        <q-item-section avatar>
                            <q-avatar 
                                v-if="item.phase"
                                size="2rem" color="transparent" text-color="transparent" icon="remove" 
                            />
                            <q-avatar 
                                v-if="item.todo"
                                size="1.5rem" color="transparent" text-color="white" icon="" 
                            />
                             <q-icon v-if="item.next" name="hourglass_top" color="secondary" size="1.65rem" />                            
                            <q-spinner-box 
                                v-if="item.progress"
                                color="secondary" 
                                size="1.85em"
                            />
                             <q-icon v-if="item.done" name="done" color="secondary" size="1.65rem" />                            
                        </q-item-section>

                        <q-item-section>
                            <q-item-label lines="1">
                                <div v-if="item.phase && item.active" class="text-h6 text-weight-bolder">
                                    <span class="text-secondary">{{item.task}}</span>
                                    &nbsp;&nbsp;&nbsp;<span class="text-caption text-negative">{{item.time}}</span>
                                </div>
                                <div v-else>
                                    <div v-if="item.phase && !item.active" class="text-h6 text-weight-bolder">
                                        <span style="color: #004d33;">{{item.task}}</span>
                                        &nbsp;&nbsp;&nbsp;<span class="text-caption" style="color: #571e36;">{{item.time}}</span>
                                    </div>
                                     <div v-else class="text-weight-medium">
                                        {{item.task.substring(8,item.task.length)}}
                                    </div>
                                </div>

                            </q-item-label>
                        </q-item-section>

                        </q-item>
                </q-list>
            </div>
        </div>
    </div>
</template>

<script>
const roadmap = [
    // Phase 1
    {"task": "Tetra Era", "active": true, "time":"[ Q2-2022 ]", "descr": "[ Initation ]", "todo":false, "progress":false, "done":false,"next": false, "phase": true}, // <<<< phase 1
    {"task": "PHASE 1: Site Launch (BETA)", "todo":false, "progress":false, "done":true,"next": false, "phase": false},
    {"task": "PHASE 1: Anouncements", "todo":false, "progress":false, "done":false,"next": true, "phase": false},
    {"task": "PHASE 1: CCA Creation (mint & lock)", "todo":false, "progress":true, "done":false,"next": false, "phase": false},
    {"task": "PHASE 1: Litepaper v1", "todo":false, "progress":true, "done":false,"next": false, "phase": false},
    // {"task": "PHASE 1: LitePaper", "todo":false, "progress":true, "done":false,"next": false, "phase": false},
    // {"task": "PHASE 1: Important Anouncements", "todo":false, "progress":false, "done":false, "next": true, "phase": false},
    // {"task": "PHASE 1: 1st Generation MetaGears", "todo":false, "progress":true, "done":false, "next": false, "phase": false},
    // {"task": "PHASE 1: Mint NFT Site Functionallity", "todo":false, "progress":false, "done":false, "next": true, "phase": false},
    // Phase 2
    {"task": "Hexa Era", "time":"[ Q3-2022 ]", "descr": "[ Foundation ]", "todo":false, "progress":false, "done":false,"next": false, "phase": true}, // <<<< phase 2
    {"task": "PHASE 2: CCA Auction", "todo":true, "progress":false, "done":false, "next": false, "phase": false},
    {"task": "PHASE 2: M-Brains NFT (Public Beta)", "todo":true, "progress":false, "done":false, "next": false, "phase": false},
    {"task": "PHASE 2: M-Gears NFT (Public Beta)", "todo":true, "progress":false, "done":false, "next": false, "phase": false},
    {"task": "PHASE 2: M-Game (Prototype)", "todo":true, "progress":false, "done":false, "next": false, "phase": false},
    {"task": "PHASE 2: Whitepaper v1", "todo":true, "progress":false, "done":false, "next": false, "phase": false},
    // {"task": "PHASE 2: MetaBrain Activation", "todo":true, "progress":false, "done":false, "next": false, "phase": false},
    // {"task": "PHASE 2: MetaStadia DHub", "todo":true, "progress":false, "done":false, "next": false, "phase": false},
    // {"task": "PHASE 2: MetaStadia Spaces", "todo":true, "progress":false, "done":false, "next": false, "phase": false},
    // {"task": "PHASE 2: MetaStadia First Game", "todo":true, "progress":false, "done":false, "next": false, "phase": false},
    // Phase 3
    {"task": "Octa Era", "time":"[ Q4-2022 ]", "descr": "[ Formation ]", "todo":false, "progress":false, "done":false,"next": false, "phase": true}, // <<<< phase 3
    {"task": "PHASE 3: Token Launch", "todo":true, "progress":false, "done":false, "next": false, "phase": false},
    {"task": "PHASE 3: Decentralization", "todo":true, "progress":false, "done":false, "next": false, "phase": false},
    {"task": "PHASE 3: Governance", "todo":true, "progress":false, "done":false, "next": false, "phase": false},
    {"task": "PHASE 3: More... [ TBA ]", "todo":true, "progress":false, "done":false, "next": false, "phase": false},
    // Phase 4
    {"task": "Dodeca Era", "time":"[ Q1-2023 ]", "descr": "[ Integration ]", "todo":false, "progress":false, "done":false,"next": false, "phase": true}, // <<<< phase 4
    {"task": "PHASE 4: To Be Anounced...", "todo":true, "progress":false, "done":false, "next": false, "phase": false},
    // Phase 5
    {"task": "Icosa Era", "time":"[ Q2-2023 ]", "descr": "[ Creation ]", "todo":false, "progress":false, "done":false,"next": false, "phase": true}, // <<<< phase 5
    {"task": "PHASE 5: To Be Anounced...", "todo":true, "progress":false, "done":false, "next": false, "phase": false}             
]

export default{
    name:"Roadmap",
    setup(){
        return{
            roadmap
        }
    }
}
</script>