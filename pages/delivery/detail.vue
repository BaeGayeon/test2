<template>
    <div class="container">
        <Header />
        <h3>배송 상세 조회하기</h3>
        <div>
            <!-- {{ name }}님의 접수 내역 -->
        </div>
        <table id="info">
        <thead>
                <tr v-for ="index in deliveryHeader" v-bind:key="index"><th>{{index}}</th></tr>
        </thead>
        <tbody>
            <!-- <tr v-for ="line in deliveryList" v-bind:key="line"> -->
            <!-- <tr v-for ="d in deliveryList" v-bind:key="d"><td>{{d.name}}</td></tr> -->
            <tr v-for ="d in deliveryList[0]" v-bind:key="d"><td>{{d}}</td></tr>
            <!-- </tr> -->
        </tbody>
    </table>
    <div id="info">
        <!-- {{ status }} -->
        <br>
        <p v-if="this.status == '배송 완료'">배송이 완료되었어요! <br></p>
        <button v-else-if="this.status == '배송지 도착' && this.isInPerson == '직접 수령하기'" @click="opendoor" class="btn1">뚜껑 열기</button>
        <p v-else-if="this.status == '배송지 도착' && this.isInPerson == '두고 가기'">배송 중입니다. 배송지에 두고 갈게요!</p>
        <p v-else-if="this.status == '접수 중'">접수 중입니다.</p>
        <p v-else-if="this.status == '접수 거부'">접수가 거부되었습니다.</p>
        <p v-else>로봇이 도착하면 뚜껑 열기 버튼이 생깁니다.<br>조금만 기다려 주세요!</p>
    </div>
    </div>
</template>

<script>
import Header from '../../components/Header';
export default {
    components: {
        Header
    },
    data() {
        return {
            name: null,
            phoneNumber: this.$route.query.phoneNumber,
            index: this.$route.query.index,
            userPhoneNumber: null,
            deliveryHeader: ['접수번호', '접수일자', '접수시간', '수령인', '전화번호', '배송지', '품목', '수령 방법', '접수 상태', '현재 상태'],
            deliveryList: [],
            status: 'hello',
            isInPerson: ''
        }
    },
    mounted() {
        this.$axios.get(`delivery/list/${this.phoneNumber}`).then(response => {
            let list = []
            if (response.data.code == 2000) {
                alert('잘못된 접근입니다.')
                this.$router.push('/');
            }
            else if (response.data.code == 1000) {
                response.data.result.forEach(function (value, index) {
                    if (value.id == $nuxt.$route.query.id) {
                        list.push({
                            // index: index + 1,
                            id: value.id,
                            date: value.date,
                            time: value.time,
                            name: value.name,
                            phoneNumber: value.phoneNumber,
                            destination: value.destination,
                            item: value.item,
                            isInPerson: value.isInPerson,
                            isAccepted: value.isAccepted,
                            status: value.status
                        });
                    }
                });
                this.deliveryList = list
                this.status = list[0]["status"]
                this.isInPerson = list[0]["isInPerson"]
            }
            else {
                alert('오류가 발생했습니다.')
                this.$router.push('/')
            }
        });
    },
    methods: { opendoor() {
        this.$axios.get(`/control/useropen`).then(function (res) {
            if (res.data) {
                alert('뚜껑을 열게요!');
            } else {
                alert('뚜껑이 이미 열리고 있어요.');
            }
        }).catch(function (err) {
            alert('오류가 발생했습니다.');
            console.log(err);
        });
    }
    }
};
</script>

<style>
    .btn1 {
    margin: 9px;
    padding: 10px 20px;
    font-size: 15px;
    border-radius: 10px;
    background-color: #F0D264;
    box-shadow: 0 6px rgba(196, 172, 83, .7);
    text-decoration: none;
    border-width: 0px;
    }

    .btn1:hover {
    box-shadow: 0 0; 
    margin-top: 15px;
    background-color: #D6BB59;}
    
    thead, tbody{
        display:inline-block;
    }
    th, tr, td {
        height: 36px;
        width: 150px;
    }
    /* th:nth-of-type(odd) {
        background-color: white;
        height: 36px;
    }
    th:nth-of-type(even) {
        background-color: rgba(131, 181, 222, 0.5);
        height: 36px;
    } */
    table tr:nth-of-type(odd){
        background-color: rgba(131, 181, 222, 0.5);
    }
    
</style>
