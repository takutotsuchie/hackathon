import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import * as Component from '../api/apiUser'
import {User} from "../types/type"
//userIdを引数に指定すると返り値にuserの構造体を返す関数getUserData

//fromUserIdを引数に指定すると返り値にmessageの構造体の配列を返す関数getMessageData
