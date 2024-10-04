import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import Header from './src/utils/Header';

import Search from './src/components/Search.svg';
import Divider from './src/components/Divider.svg';
import Picture from './src/components/Picture.svg';
import Cross from './src/components/Cross.svg';

import {RadioButton} from 'react-native-paper';
import DocumentPicker, {types} from 'react-native-document-picker';

const App = () => {
  const [checked, setChecked] = useState('');
  const [fileResponse, setFileResponse] = useState([]);


  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
        type: [types.pdf, types.images],
        allowMultiSelection: true,
      });
      setFileResponse(response);
    } catch (err) {
      console.warn(err);
    }
  }, []);

  const removeFile = indexToRemove => {
    setFileResponse(prevFiles =>
      prevFiles.filter((_, index) => index !== indexToRemove),
    );
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="#FF7F27" />
      <Header />
      <View style={styles.topCont}>
        <View style={styles.searchCont}>
          <Search />
          <TextInput style={styles.searchInput} placeholder="Search..." />
        </View>
        <View style={styles.headingsCont}>
          <TouchableOpacity style={styles.allChatsBtn}>
            <Text style={styles.allChatsBtnTxt}>All Chats</Text>
          </TouchableOpacity>
          <Divider />
          <TouchableOpacity style={styles.newMsgBtn}>
            <Text style={styles.newMsgBtnTxt}>New Message</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView >
        <View style={styles.bottomCont}>
          <View style={styles.msgCont}>
            <View style={styles.msgTitleCont}>
              <Text style={styles.msgTitleHeading}>TITLE</Text>
              <TextInput
                style={styles.msgTitleInput}
                placeholder="enter title"
              />
            </View>
            <View style={styles.msgBodyCont}>
              <Text style={styles.msgBodyHeading}>MESSAGE</Text>
              <TextInput
                style={styles.msgBodyInput}
                placeholder="enter message"
                multiline={true}
                numberOfLines={6}
              />
            </View>
          </View>
          <View style={styles.filesCont}>
            <View style={styles.filesHeadingCont}>
              <View style={styles.filesHeadingTexts}>
                <Text style={styles.filesMainHeading}>ATTACH FILE</Text>
                <Text style={styles.filesSubHeading}> (OPTIONAL)</Text>
              </View>
              <View style={styles.filesHeadingNote}>
                <Text style={styles.filesNoteTxt}>PDF, JPEG, PNG only</Text>
              </View>
            </View>
            <View style={styles.filesBodyCont}>
              <View style={styles.file}>
                {fileResponse.length > 0 &&
                  fileResponse.map((file, index) => (
                    <View key={index.toString()} style={styles.outline}>
                      <View style={styles.attachedFile}>
                        {file?.type === 'image/jpeg' ||
                        file?.type === 'image/png' ? (
                          <Image
                            source={{uri: file?.uri}}
                            style={styles.attachedImage}
                          />
                        ) : (
                          <Image
                            source={require('./src/components/PDF.jpg')}
                            style={styles.attachedImage}
                          />
                        )}
                      </View>
                      <View style={styles.removeAttachment}>
                        <TouchableOpacity
                          style={styles.removeAttachmentBtn}
                          onPress={() => removeFile(index)}>
                          <Cross />
                        </TouchableOpacity>
                      </View>
                    </View>
                  ))}
              </View>
              <View style={styles.browseFilesCont}>
                <TouchableOpacity
                  style={styles.browseFilesBtn}
                  onPress={handleDocumentSelection}>
                  <Text style={styles.browseFilesTxt}>BROWSE</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.sendersCont}>
            <View style={styles.radioCont}>
              <RadioButton
                style={styles.radioBtn}
                value="all"
                status={checked === 'all' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('all')}
                color="#000000"
              />
              <Text style={styles.radioTxt}>All Members</Text>
            </View>
            <View style={styles.radioCont}>
              <RadioButton
                style={styles.radioBtn}
                value="owing"
                status={checked === 'owing' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('owing')}
                color="#000000"
              />
              <Text style={styles.radioTxt}>Owing Members</Text>
            </View>
            <View style={styles.radioCont}>
              <RadioButton
                style={styles.radioBtn}
                value="notowing"
                status={checked === 'notowing' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('notowing')}
                color="#000000"
              />
              <Text style={styles.radioTxt}>Not Owing Member</Text>
            </View>
            <View style={styles.radioCont}>
              <RadioButton
                style={styles.radioBtn}
                value="selected"
                status={checked === 'selected' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('selected')}
                color="#000000"
              />
              <Text style={styles.radioTxt}>Selected Members</Text>
            </View>
          </View>
          <View style={styles.sendBtnCont}>
            <TouchableOpacity style={styles.sendNowBtn}>
              <Text style={styles.sendNowTxt}>SEND NOW</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  // topCont
  topCont: {
    backgroundColor: '#FF7F27',
    alignItems: 'center',
  },
  // searchCont
  searchCont: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 13,
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 12,
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    width: '90%',
    fontSize: 16,
    fontWeight: '300',
    paddingLeft: 8,
  },
  // headingsCont
  headingsCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    width: '90%',
  },
  allChatsBtn: {
    width: '48%',
  },
  allChatsBtnTxt: {
    color: '#FFFFFF66',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
  newMsgBtn: {
    width: '48%',
  },
  newMsgBtnTxt: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
    color: '#FFFFFF',
  },
  scrollViewCont: {},
  // bottomCont
  bottomCont: {
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    paddingLeft: 8,
    paddingRight: 8,
    // paddingBottom: 160, // TODO:
  },
  // msgCont
  msgCont: {},
  msgTitleCont: {},
  msgTitleHeading: {
    fontSize: 12,
    fontWeight: '400',
    color: '#FF7F27',
    paddingBottom: 4,
  },
  msgTitleInput: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#DDDCDC',
    paddingLeft: 16,
    paddingRight: 16,
  },
  msgBodyCont: {
    marginTop: 12,
  },
  msgBodyHeading: {
    fontSize: 12,
    fontWeight: '400',
    color: '#FF7F27',
    paddingBottom: 4,
  },
  msgBodyInput: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#DDDCDC',
    paddingLeft: 16,
    paddingRight: 16,
    textAlignVertical: 'top',
  },
  // filesCont
  filesCont: {
    marginTop: 12,
  },
  filesHeadingCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 4,
  },
  filesHeadingTexts: {
    flexDirection: 'row',
  },
  filesMainHeading: {
    fontSize: 12,
    fontWeight: '400',
    color: '#FF7F27',
  },
  filesSubHeading: {
    fontSize: 12,
    fontWeight: '400',
    color: '#C4C4C4',
  },
  filesHeadingNote: {},
  filesNoteTxt: {
    fontSize: 12,
    fontWeight: '400',
    color: '#C4C4C4',
  },
  filesBodyCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#FF7F27',
    borderRadius: 10,
    backgroundColor: '#FF7F2714',
    padding: 12,
  },
  file: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 4,
    rowGap: 8,
    width: '70%',
  },
  outline: {
    padding: 4,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 40,
  },
  attachedFile: {},
  attachedImage: {
    width: 61,
    height: 61,
    borderRadius: 40,
  },
  removeAttachment: {
    position: 'absolute',
    left: 28,
    top: 56,
  },
  removeAttachmentBtn: {},
  browseFilesCont: {},
  browseFilesBtn: {
    borderRadius: 5,
    backgroundColor: '#263238',
    padding: 8,
    paddingLeft: 12,
    paddingRight: 12,
  },
  browseFilesTxt: {
    color: '#FFFFFF',
  },
  // sendersCont
  sendersCont: {
    marginTop: 12,
  },
  radioCont: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioBtn: {},
  radioTxt: {
    fontSize: 12,
    fontWeight: '400',
    color: '#263238',
  },
  // sendBtnCont
  sendBtnCont: {
    padding: 36,
  },
  sendNowBtn: {
    borderRadius: 13,
    backgroundColor: '#FF7F27',
    alignItems: 'center',
    padding: 8,
  },
  sendNowTxt: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});
