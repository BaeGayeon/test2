<template>
    <div class="list">
        <Header />
        <h3>접수 조회하기</h3>
        <div>
            {{ name }}님의 접수 내역입니다.
            <br>
            자세히 보시려면 각 내역을 터치하세요!
        </div>
        <div v-if="false">
            <label for="userPhoneNumber">접수자 전화번호</label>
            {{ userPhoneNumber }}
        </div>
        <table>
            <thead>
            <th v-for ="index in deliveryHeader" v-bind:key="index">{{ index }}</th>
        </thead>
        <tbody>
            <tr v-for ="line in deliveryList" v-bind:key="line" > 
            <td v-for ="d in line" v-bind:key="d" @click="viewDetail($event, line.id)">{{ d }}</td>
            </tr>
        </tbody>
        </table>
    </div>
</template>

<script>
import Header from '../../../components/Header';
export default {
    components: {
        Header
    },
    data() {
        return {
            name: null,
            phoneNumber: this.$route.params.phoneNumber,
            userPhoneNumber: null,
            deliveryHeader: ['😀', '접수번호', '접수일자', '품목', '현재 상태'],
            deliveryList: []
        }
    },
    mounted() {
        this.$axios.get(`delivery/list/${this.phoneNumber}`).then(response => {
            const list = []
            if (response.data.code == 2000) {
                alert('잘못된 접근입니다.')
                this.$router.push('/');
            }
            else if (response.data.code == 1000) {
                response.data.result.forEach(function (value, index) {
                    list.push({
                        index: index + 1,
                        id: value.id,
                        date: value.date,
                        // time: value.time,
                        // name: value.name,
                        // phoneNumber: value.phoneNumber,
                        // destination: value.destination,
                        item: value.item,
                        // isInPerson: value.isInPerson,
                        status: value.status
                    });
                });
                this.deliveryList = list
            }
            else {
                alert('오류가 발생했습니다.')
                this.$router.push('/')
            }      
        });
    },
    methods: {
        viewDetail(ev, id) {
            $nuxt.$router.push('/delivery/detail?phoneNumber=' + this.$route.params.phoneNumber + "&id=" + id)
        }
    }
};
</script>

<style>
.list table{
    font-size: 13px;
    width: 86%;
    margin-top: 10px;
    /* background-color: rgb(0, 0, 0); */
}
/* tanle th{
    padding : 15px;
    border-bottom: 2px solid  darkgray;
} */
.list table td{
    padding : 0;
    margin: 0;
}
.list table tr{
    /* background-color: rgba(131, 181, 222, 0.5); */
    border: 10px solid rgb(0, 0, 0, 1);
    /* margin: 10px; */
    height: 35px;
    /* padding: 0; */
}

</style>
