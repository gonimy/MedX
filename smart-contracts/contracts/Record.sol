pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "./EncryptedFile.sol";

contract Record {

    address public patient;
    address public doctor;
    uint256 public createdAt;

    EncryptedFile public record;
    
    struct EncryptedFile {
        string filePath;
        string dataHash;
        string hashMethod;
        string encriptionMethod;
    }

    constructor(
        address _patient,
        EncryptedFile _record
    ) public {
        patient = _patient;
        doctor = tx.origin;
        createdAt = now;
        record = _record;
        attachments = _attachments;
    }


}
